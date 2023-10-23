<?php

namespace App\Services\V1;

use Illuminate\Http\Request;

class TaskQuery {
    protected $acceptedParms = [
        'status' => ['eq'],
    ];

    protected $operatorMap = [
        'eq' => '=',
    ];

    public function transform(Request $request) {
        $eloquentQuery = [];

        foreach ($this->acceptedParms as $param => $operators) {
            $query = $request->query($param);

            if (null === $query){
                continue;
            }

            foreach ($operators as $operator) {
                if (isset($query[$operator])) {
                    $eloquentQuery[] = [$param, $this->operatorMap[$operator], $query[$operator]]; 
                }
            }
        }

        return $eloquentQuery;
    }
}