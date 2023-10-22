<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'title' => $this->faker->text(20),
            'description' => $this->faker->text(150),
            'due_date' => $this->faker->dateTimeThisMonth(),
            'status' => $this->faker->randomElement(['pending','completed']),
        ];
    }
}
