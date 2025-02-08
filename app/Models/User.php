<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Sanctum\PersonalAccessToken;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

	public function createApiToken($name){
		$token = $this->createToken($name);

		$hashedToken = $token->accessToken->token;
		$plainTextToken = $token->plainTextToken;

		PersonalAccessToken::where('token', $hashedToken)
			->update(['plain_text_token' => $plainTextToken]);

		return $plainTextToken;
	}

	// Add an access or for the API token
	protected $appends = ['api_key'];

	public function getApiKeyAttribute()
	{
		// Fetch the first token if it exists, or create a new one
		$token = $this->tokens()->first()->plain_text_token;
		
		if (!$token) {
			$token = $this->createApiToken('default-api-key');
		}

		return $token;
	}
}
