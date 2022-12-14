<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;

class SlackController extends Controller
{
    // slack/events
    public function events(Request $request)
    {

 


        // if hep is requested, show help
        if ($request->text == 'help') {
            echo '/meet [room name (default: office)] - creates a link to a meeting room';
            die();
        }

        //if random is requested, show random
        if ($request->text == 'random') {
            $text = Str::random(8);
            echo 'https://meet.harc.agency/' . $text;
            die();
        }

        //if post is requested, show data
        if ($request->text == 'post') {
            json_encode($request->all());
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


        //Reference: Message Payload
        // https://api.slack.com/reference/messaging/payload

        // what is needed to create a message?
        // In Order to create a message, we need to create a block kit

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
        //set the header to json
        header('Content-Type: application/json');
        http_response_code(200);


        // in order for slack to understand the response, we need to return it as JSON
        return json_encode($blocks);
    }

    //challenge
    public function challenge(Request $request)
    {
        echo $request->challenge;
    }
}
