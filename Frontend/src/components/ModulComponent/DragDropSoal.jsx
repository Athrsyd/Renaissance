/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  DndContext,
  useDraggable,
  DragOverlay,
  useDroppable,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCenter,
  MeasuringStrategy,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

function DraggableChip({ id, label, isUsed }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id, disabled: isUsed });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        px-5 py-2 rounded-lg font-semibold text-sm select-none transition-opacity touch-none
        ${
          isUsed
            ? "hidden"
            : isDragging
              ? "opacity-0"
              : "bg-bistre text-white cursor-grab active:cursor-grabbing hover:bg-coffe/80"
        }
      `}
    >
      {label}
    </div>
  );
}

function DroppableTarget({ id, label, filledWith, isCorrect, isChecked }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-white font-medium text-sm w-36 capitalize">
        {label}
      </span>
      <div
        ref={setNodeRef}
        className={`
          flex-1 h-10 rounded-lg border-2 flex items-center justify-center
          text-sm font-semibold transition-all
          ${
            isChecked
              ? isCorrect
                ? "border-green-400 bg-green-400/20 text-green-300"
                : "border-red-400 bg-red-400/20 text-red-300"
              : filledWith
                ? "border-coffe bg-coffe text-white"
                : isOver
                  ? "border-coffe/80 bg-coffe/10 border-dashed"
                  : "border-white/20 border-dashed text-white/30"
          }
        `}
      >
        {filledWith ?? (
          <span className="text-white/30 text-xs font-normal">Drag Here</span>
        )}
      </div>
    </div>
  );
}

function ResultBanner({ allCorrect, onReset }) {
  return (
    <div
      className={`
        w-full flex flex-col items-center text-center
        
      `}
    >
      <span className="text-2xl">{allCorrect ? "" : ""}</span>
      {allCorrect ? (
        <>
          <p className="text-[#F2E0D2] font-monstserrat font-normal text-lg">
            Excellent Work! <br />
            <span className="text-white">Your Answer Is Correct.</span>
          </p>
        </>
      ) : (
        <>
          <p className="text-red-700 font-monstserrat font-normal text-lg">
            Belum Tepat! <br />
            <span className="text-white">Coba Lagi, Kamu Pasti Bisa.</span>
          </p>
          <button
            onClick={onReset}
            className="mt-1 text-white/60 text-xs underline"
          >
            Ulangi
          </button>
        </>
      )}
    </div>
  );
}

const measuring = {
  droppable: { strategy: MeasuringStrategy.Always },
};

export default function DragDropSoal({ soal, onCorrect }) {
  const pairs = soal.pilihan.map((benda, i) => ({
    benda,
    jawaban: soal.jawaban[i],
  }));
  const chips = soal.jawaban.map((j, i) => ({ id: `chip-${i}`, label: j }));

  const [filled, setFilled] = useState({});
  const [checked, setChecked] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 8,
      }
    })
  );

  const usedChipIds = Object.values(filled);
  const activeChip = chips.find((c) => c.id === activeId);
  const allFilled = Object.keys(filled).length === pairs.length;

  const isCorrect = (benda) => {
    const chip = chips.find((c) => c.id === filled[`drop-${benda}`]);
    const expected = pairs.find((p) => p.benda === benda)?.jawaban;
    return chip?.label.toLowerCase() === expected?.toLowerCase();
  };

  // ✅ cek semua benar setelah checked
  const allCorrect = checked && pairs.every(({ benda }) => isCorrect(benda));

  const handleDragStart = ({ active }) => setActiveId(active.id);

  const handleDragEnd = ({ active, over }) => {
    setActiveId(null);
    if (!over) return;
    setFilled((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((k) => {
        if (next[k] === active.id) delete next[k];
      });
      next[over.id] = active.id;
      return next;
    });
  };

  useEffect(() => {
    if (allCorrect) onCorrect?.();
  }, [allCorrect]);

  const handleReset = () => {
    setFilled({});
    setChecked(false);
  };

  return (
    <div style={{ isolation: "isolate" }}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        measuring={measuring} // ✅ fix "terbang"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-col gap-3 w-full">
          <h2 className="text-white font-normal font-montserrat text-center text-base leading-snug mb-1">
            {soal.judul}
          </h2>

          {/* Target rows */}
          <div className="flex flex-col gap-3">
            {pairs.map(({ benda }) => (
              <DroppableTarget
                key={benda}
                id={`drop-${benda}`}
                label={benda}
                filledWith={
                  chips.find((c) => c.id === filled[`drop-${benda}`])?.label
                }
                isCorrect={isCorrect(benda)}
                isChecked={checked}
              />
            ))}
          </div>

          {/* Chip pool */}
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {chips.map((chip) => (
              <DraggableChip
                key={chip.id}
                id={chip.id}
                label={chip.label}
                isUsed={usedChipIds.includes(chip.id)}
              />
            ))}
          </div>

          {/* ✅ Result banner muncul setelah dicek */}
          {checked && (
            <ResultBanner allCorrect={allCorrect} onReset={handleReset} />
          )}

          {/* ✅ Tombol cek — hanya tampil sebelum dicek */}
          {!checked && (
            <button
              onClick={() => setChecked(true)}
              disabled={!allFilled}
              className="bg-coffe text-white py-2 px-6 w-full rounded-xl text-sm font-semibold disabled:opacity-40 mt-2"
            >
              Cek Jawaban
            </button>
          )}
        </div>

        {/* ✅ DragOverlay — chip ghost saat di-drag */}
        <DragOverlay modifiers={[restrictToWindowEdges]} dropAnimation={null}>
          {activeChip && (
            <div className="bg-coffe text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-lg cursor-grabbing pointer-events-none">
              {activeChip.label}
            </div>
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
}