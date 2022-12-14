<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;

class SlackController extends Controller
{
    //slack/events
    public function events(Request $request)
    {
        // first, check the token
        if ($request->token != 'xoxb-3439711113253-4514126187474-Fw5F1wUGABOBI2SMSEIUs0wP') {
            return response('Invalid token', 403);
        }

        return response('OK', 200);

        
    }

}
