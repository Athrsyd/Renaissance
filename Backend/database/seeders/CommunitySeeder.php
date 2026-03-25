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
            // User 0 create (otomatis follow)
            [
                'name' => 'Discussion Group SKS',
                'image_path' => 'communities/sks-group.jpg',
                'created_by' => $users[0]->id,
                'user0_follow' => true,
            ],
            [
                'name' => 'PKN Diskusi',
                'image_path' => 'communities/pkn.jpg',
                'created_by' => $users[0]->id,
                'user0_follow' => true,
            ],
            // User 1 create, User 0 juga follow
            [
                'name' => 'Matematika Space',
                'image_path' => 'communities/matematika.jpg',
                'created_by' => $users[1]->id,
                'user0_follow' => true,
            ],
            // User 1 create, User 0 TIDAK follow
            [
                'name' => 'Kelas 7 Diskusi',
                'image_path' => 'communities/wwkwk.jpg',
                'created_by' => $users[1]->id,
                'user0_follow' => false,
            ],
            [
                'name' => 'Pejuang SNBT',
                'image_path' => 'communities/pkoooon.jpg',
                'created_by' => $users[0]->id,
                'user0_follow' => false,
            ],
            [
                'name' => 'JavaScript Enthusiasts',
                'image_path' => 'communities/kokok.jpg',
                'created_by' => $users[1]->id,
                'user0_follow' => false,
            ],
        ];
        
        foreach ($communities as $community) {
            $createdCommunity = Community::create([
                'name' => $community['name'],
                'image_path' => $community['image_path'],
                'created_by' => $community['created_by'],
            ]);
            
            // Add creator sebagai member
            CommunityMember::create([
                'community_id' => $createdCommunity->id,
                'user_id' => $community['created_by'],
                'joined_at' => now(),
            ]);
            
            // Jika user0_follow = true, tambah user 0 sebagai member (kecuali dia creator)
            if ($community['user0_follow'] && $community['created_by'] !== $users[0]->id) {
                CommunityMember::create([
                    'community_id' => $createdCommunity->id,
                    'user_id' => $users[0]->id,
                    'joined_at' => now(),
                ]);
            }
        }
        
        $this->command->info('Communities seeded successfully! User 0 follows 3 communities.');
    }
}
