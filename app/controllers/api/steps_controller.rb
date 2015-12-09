class StepsController < ApplicationController
  def index
    @steps = Step.all
  end

  def create
    
  end

  def update

  end

  def destroy

  end

  private

  def step_params
    params.require(:step).permit(:todo_id, :body)
  end
end
