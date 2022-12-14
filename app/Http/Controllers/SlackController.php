<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;

class SlackController extends Controller
{
    //slack/events
    public function meet(Request $request)
    {
        //get the text from the request
        $text = $request->input('text');

        // check if the text is empty
        if (empty($text)) {
            //if empty set text to 'office'
            $text = 'office';
        }

        //if text is 'random' generate a random string
        if ($text == 'random') {
            $text = Str::random(10);
        }

        // if text == help
        if ($text == 'help') {
            $blocks = [
                [
                    'type' => 'section',
                    'text' => [
                        'type' => 'mrkdwn',
                        'text' => 'To create a meeting use the following command: `/meet [meeting name]`',
                    ],
                ],
                [
                    'type' => 'section',
                    'text' => [
                        'type' => 'mrkdwn',
                        'text' => 'To create a random meeting use the following command: `/meet random`',
                    ],
                ],
                [
                    'type' => 'section',
                    'text' => [
                        'type' => 'mrkdwn',
                        'text' => 'To create a meeting with the default name use the following command: `/meet`',
                    ],
                ],
            ];

            return response()->json([
                'response_type' => 'in_channel',
                'blocks' => $blocks,
            ]);
        }



        $link = 'https://meet.harc.agency/' . $text;
        
        $blocks = [
            [
                'type' => 'section',
                'text' => [
                    'type' => 'mrkdwn',
                    'text' => 'Click the button below to join the meeting',
                ],
            ],
            [
                'type' => 'divider',
            ],
            [
                'type' => 'actions',
                'elements' => [
                    [
                        'type' => 'button',
                        'text' => [
                            'type' => 'plain_text',
                            'text' => 'Join Meeting: ' . $text,
                        ],
                        'url' => $link,
                    ],
                ],
            ],
        ];

        return response()->json([
            'response_type' => 'in_channel',
            'blocks' => $blocks,
        ]);

        
    }

}
