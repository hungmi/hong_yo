class User < ApplicationRecord
	enum role: { admin: 0 }
	has_secure_password
end