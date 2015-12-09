# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  todo_id    :integer          not null
#  body       :string           not null
#  done       :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Step < ActiveRecord::Base
  validates :todo_id, :body, presence: true

  belongs_to :todo
end
