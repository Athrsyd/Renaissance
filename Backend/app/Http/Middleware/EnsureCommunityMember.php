<?php

namespace App\Http\Middleware;

use App\Models\CommunityMember;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

/**
 * Middleware ini menggantikan pengecekan membership yang duplikat
 * di ChatController::getMessages() dan ChatController::sendMessage().
 *
 * Penggunaan di routes: ->middleware('community.member')
 */
class EnsureCommunityMember
{
    public function handle(Request $request, Closure $next): Response
    {
        $community = $request->route('community');

        if (!$community) {
            return response()->json(['message' => 'Komunitas tidak ditemukan.'], 404);
        }

        $isMember = CommunityMember::where('community_id', $community->id)
            ->where('user_id', Auth::id())
            ->exists();

        if (!$isMember) {
            return response()->json(['message' => 'Anda bukan member komunitas ini.'], 403);
        }

        return $next($request);
    }
}
