<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function () {
	Route::get('/user', function (Request $request) {
		return $request->user();
	});

	Route::get('/nav-menu', function () {
		$data = [
			"teams" => [
				[
					"name" => "Acme Inc",
					"logo" => "GalleryVerticalEnd",
					"plan" => "Enterprise",
				],
				[
					"name" => "Acme Corp.",
					"logo" => "AudioWaveform",
					"plan" => "Startup",
				],
				[
					"name" => "Evil Corp.",
					"logo" => "Command",
					"plan" => "Free",
				],
			],
			"navMain" => [
				[
					"title" => "Playground",
					"url" => "#",
					"icon" => "SquareTerminal",
					"isActive" => true,
					"items" => [
						[
							"title" => "History",
							"url" => "#",
						],
						[
							"title" => "Starred",
							"url" => "#",
						],
						[
							"title" => "Settings",
							"url" => "#",
						],
					],
				],
				[
					"title" => "Models",
					"url" => "#",
					"icon" => "Bot",
					"items" => [
						[
							"title" => "Genesis",
							"url" => "#",
						],
						[
							"title" => "Explorer",
							"url" => "#",
						],
						[
							"title" => "Quantum",
							"url" => "#",
						],
					],
				],
				[
					"title" => "Documentation",
					"url" => "#",
					"icon" => "BookOpen",
					"items" => [
						[
							"title" => "Introduction",
							"url" => "#",
						],
						[
							"title" => "Get Started",
							"url" => "#",
						],
						[
							"title" => "Tutorials",
							"url" => "#",
						],
						[
							"title" => "Changelog",
							"url" => "#",
						],
					],
				],
				[
					"title" => "Settings",
					"url" => "#",
					"icon" => "Settings2",
					"items" => [
						[
							"title" => "General",
							"url" => "#",
						],
						[
							"title" => "Team",
							"url" => "#",
						],
						[
							"title" => "Billing",
							"url" => "#",
						],
						[
							"title" => "Limits",
							"url" => "#",
						],
					],
				],
			],
			"projects" => [
				[
					"name" => "Design Engineering",
					"url" => "#",
					"icon" => "Frame",
				],
				[
					"name" => "Sales & Marketing",
					"url" => "#",
					"icon" => "PieChart",
				],
				[
					"name" => "Travel",
					"url" => "#",
					"icon" => "Map",
				],
			],
		];

		return response()->json($data);
	});
});

