<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $method = $this->method();
        
        if ($method === "PUT"){
            return [
                'title' => ['required','string'],
                'description' => ['required','string'],
                'dueDate' => ['required','date'],
            ];
        } else { // PATCH
            return [
                'title' => ['sometimes', 'required','string'],
                'description' => ['sometimes', 'required','string'],
                'dueDate' => ['sometimes', 'required','date'],
            ];
        }
    }

    protected function prepareForValidation(): void
    {
        if ($this->dueDate) {
            $this->merge([
                'due_date' => $this->dueDate,
            ]);
        }
    }
}
