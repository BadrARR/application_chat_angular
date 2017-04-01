class Participation < ActiveRecord::Base
	belongs_to :conversation
	has_and_belongs_to_many :users
end
