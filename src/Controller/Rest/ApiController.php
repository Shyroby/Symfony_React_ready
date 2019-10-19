<?php

namespace App\Controller\Rest;

use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Response;

class ApiController extends AbstractFOSRestController{
   
    /**
     * @Rest\Get("/endpoint", name="api_route")
     */
    public function index(){
        $data = [
            "message" => "Welcome to the your new API first endpoint"
        ];

        return View::create($data, Response::HTTP_OK );
    }
}