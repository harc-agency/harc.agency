<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;

class SlackController extends Controller
{
    // slack/meet
    public function meet(Request $request)
    {

        // if help is requested, show help
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
        $text = $request->text ?? 'office';

        // remove spaces from the argument
        $text = str_replace(' ', '', $text);

        // convert the argument to lowercase
        $text = strtolower($text);

        // create the link
        echo 'https://meet.harc.agency/' . $text;

    }

    //challenge
    public function challenge(Request $request)
    {
        echo $request->challenge;
    }
}
