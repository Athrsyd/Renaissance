<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Community;
use App\Models\CommunityMember;

class CommunitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::take(2)->get();

        if ($users->count() < 2) {
            $this->command->info('Not enough users to create communities. Please seed users first.');
            return;
        }

        $communities = [
            [
                'name' => 'Discussion Group SKS',
                'image_path' => 'communities/sks-group.jpg',
                'created_by' => $users[0]->id, // User pertama
            ],
            [
                'name' => 'Matematika Space',
                'image_path' => 'communities/matematika.jpg',
                'created_by' => $users[1]->id, // User kedua
            ],
            [
                'name' => 'PKN Diskusi',
                'image_path' => 'communities/pkn.jpg',
                'created_by' => $users[0]->id,
            ],
            [
                'name' => 'Kelas 7 Diskusi',
                'image_path' => 'communities/wwkwk.jpg',
                'created_by' => $users[1]->id,
            ],
            [
                'name' => 'kooko Diskusi',
                'image_path' => 'communities/pkoooon.jpg',
                'created_by' => $users[0]->id,
            ],
            [
                'name' => 'PKmmsmN Diskusi',
                'image_path' => 'communities/kokok.jpg',
                'created_by' => $users[1]->id,
            ],
            [
                'name' => 'Study Group Kelas XII',
                'image_path' => 'communities/xii-study.jpg',
                'created_by' => $users[0]->id,
            ]
        ];
        foreach ($communities as $community) {
            $createdCommunity = Community::create($community);
            
            // Add creator
            CommunityMember::create([
                'community_id' => $createdCommunity->id,
                'user_id' => $community['created_by'],
                'joined_at' => now(),
            ]);
            
            // Add lebih banyak members (untuk testing)
            foreach ($users as $user) {
                if ($user->id !== $community['created_by']) {
                    CommunityMember::create([
                        'community_id' => $createdCommunity->id,
                        'user_id' => $user->id,
                        'joined_at' => now(),
                    ]);
                }
            }
        }
        $this->command->info('Communities seeded successfully!');
    }
}
