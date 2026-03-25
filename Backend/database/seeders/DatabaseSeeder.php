<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Athrsyd',
            'email' => 'test@example.com',
            'password' => Hash::make('password'),
        ]);

        User::factory()->create([
            'name' => 'User 2',
            'email' => 'user2@example.com',
            'password' => Hash::make('password'),
        ]);
        $this->call([
            ModulBelajarSeeder::class,
            CommunitySeeder::class,
            // UserModulProgressSeeder::class,
        ]);
    }
}
