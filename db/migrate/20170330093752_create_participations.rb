class CreateParticipations < ActiveRecord::Migration
  def change
    create_table :participations do |t|
      t.belongs_to :conversation, index: true
      t.timestamps null: false
    end
  end
end
