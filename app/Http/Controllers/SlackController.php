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

        // create a slack dialog box with a button
        $response = [
            'response_type' => 'in_channel',
            'attachments' => [
                [
                    'text' => 'Click the button to join the meeting',
                    'fallback' => 'You are unable to join the meeting',
                    'callback_id' => 'join_meeting',
                    'color' => '#3AA3E3',
                    'attachment_type' => 'default',
                    'actions' => [
                        [
                            'name' => 'join',
                            'text' => 'Join Meeting',
                            'type' => 'button',
                            'url' => $link,
                        ],
                    ],
                ],
            ],
        ];
       
    }
}
