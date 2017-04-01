class UsersParticipations < ActiveRecord::Migration
  def change
  	create_table :participations_users do |t|
  		t.belongs_to :user, index: true
    	t.belongs_to :participation, index: true
    end
  end
end
