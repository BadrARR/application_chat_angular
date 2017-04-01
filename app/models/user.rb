class User < ActiveRecord::Base
	has_many :conversations
	has_many :messages
  has_and_belongs_to_many :participations
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable #, :confirmable
  include DeviseTokenAuth::Concerns::User
end
