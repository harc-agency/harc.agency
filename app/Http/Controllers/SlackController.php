<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SlackController extends Controller
{
    // meet
    public function meet(Request $request)
    {
        if ($request->text == 'help') {
            echo '/meet [room name] - creates a link to a meeting room';
            die();
        }




        // if the argument is set, use it, otherwise use 'office'
        $text = isset($request->text) ? $request->text : 'office';

        // remove spaces from the argument
        $text = str_replace(' ', '', $text);

        // convert the argument to lowercase
        $text = strtolower($text);

        // create the link
        $link = 'https://meet.harc.agency/' . $text;

        //Block Kit Builder
        $blocks = [
            "blocks" => [
                [
                    "type" => "section",
                    "text" => [
                        "type" => "mrkdwn",
                        "text" => "Click the button below to join the meeting room: " . $text
                    ]
                ],
                [
                    "type" => "actions",
                    "elements" => [
                        [
                            "type" => "button",
                            "text" => [
                                "type" => "plain_text",
                                "text" => "Join Meeting",
                                "emoji" => true
                            ],
                            "value" => "click_me_123",
                            "url" => $link
                        ]
                    ]
                ]
            ]
        ];


        // in order for slack to understand the response, we need to return it as JSON
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
        header('Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, Application');

        
        //also return the link
        return json_encode($blocks);
    }
}
