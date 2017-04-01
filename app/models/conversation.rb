class Conversation < ActiveRecord::Base
	belongs_to :user
	has_many :participations
  	has_many :messages
end
