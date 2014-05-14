class MTestsController < ApplicationController
  before_action :set_m_test, only: [:show, :edit, :update, :destroy]

  # GET /m_tests
  # GET /m_tests.json
  def index
    @m_tests = MTest.all
  end

  # GET /m_tests/1
  # GET /m_tests/1.json
  def show
  end

  # GET /m_tests/new
  def new
    @m_test = MTest.new
  end

  # GET /m_tests/1/edit
  def edit
  end

  # POST /m_tests
  # POST /m_tests.json
  def create
    @m_test = MTest.new(m_test_params)

    respond_to do |format|
      if @m_test.save
        format.html { redirect_to @m_test, notice: 'M test was successfully created.' }
        format.json { render action: 'show', status: :created, location: @m_test }
      else
        format.html { render action: 'new' }
        format.json { render json: @m_test.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /m_tests/1
  # PATCH/PUT /m_tests/1.json
  def update
    respond_to do |format|
      if @m_test.update(m_test_params)
        format.html { redirect_to @m_test, notice: 'M test was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @m_test.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /m_tests/1
  # DELETE /m_tests/1.json
  def destroy
    @m_test.destroy
    respond_to do |format|
      format.html { redirect_to m_tests_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_m_test
      @m_test = MTest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def m_test_params
      params.require(:m_test).permit(:name, :desc)
    end
end
