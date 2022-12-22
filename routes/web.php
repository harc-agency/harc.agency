<?php

use App\Http\Controllers\PasswordController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::prefix('/admin')->group(__DIR__.'/admin.php');


// login/logout
Route::get( 'login', [\App\Http\Controllers\Auth\LoginController::class,'showLoginForm'])->name('login');
Route::post('login', [\App\Http\Controllers\Auth\LoginController::class,'login']);

Route::match(['get', 'post'],'logout', [\App\Http\Controllers\Auth\LoginController::class,'logout'])->name('logout');

//User
Route::delete('/user', function (){
    Auth::user()->delete();
    Auth::logout();
    return Inertia::location(url('/'));
})->name('current-user.destroy');

//Password
Route::put('/user/password', [\App\Http\Controllers\PasswordController::class, 'update'])
    ->middleware(['auth'])
    ->name('password.update');

// user/profile-information
Route::put('/user/profile-information', [\App\Http\Controllers\ProfileInformationController::class, 'update'])
    ->middleware(['auth'])
    ->name('user-profile-information.update');

//Home
Route::get('/',  function(){
    return view('welcome');

    // if site settings
    //    if(Setting::config()->get('site.default_route') !== '') {
    //         return redirect(Setting::config()->get('site.default_route'));
    //    }

    return Inertia::render('Home', [
        'laravelVersion' => \Illuminate\Foundation\Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})
->name('home');

//Profile
Route::get('/profile', function (){
    return Inertia::render('profile/Show', []);
})
->name('profile.show')
->middleware('auth');

//UserSettings
Route::resource('/user-settings', 'UserSettingsController');

// Stork Project
Route::prefix('/stork')->group(function () {
    // welcome page
    Route::get('/', function () {
        // Stork/Welcome is located in resources/js/Pages/Stork/Welcome.vue
        return Inertia::render('Stork/index', []);
    })->name('stork.welcome');

    


    Route::prefix('/module-1')->group(function () {

        Route::get('/', function () {
            return Inertia::render('Stork/modules/module-1', []);
        })->name('stork.modules.module-1');

        Route::get('/project-1', function () {
            return Inertia::render('Stork/modules/module-1/projects/project1.vue', []);
        })->name('stork.modules.module-1.project-1');
    });

    // http://hark.agency/stork/modules/module-2
    Route::get('/module-2', function () {
        return Inertia::render('Stork/modules/module-2', []);
    })->name('stork.modules.module-2');


     
});



//Slack Commands
// group all slack commands under /slack
Route::prefix('/slack')->group(function () {
    Route::any('/meet', [\App\Http\Controllers\SlackController::class, 'meet']);
});


// Nothing below this line
//Pages
Route::get('/{link}',  [PageController::class, 'page'])->name('page');