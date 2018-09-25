class ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    if record.is_a? Array
      @parent = record.first
      @record = record.last
    else
      @record = record
    end
  end

  def index?
    false
  end

  def show?
    false
  end

  def create?
    false
  end

  def new?
    create?
  end

  def update?
    false
  end

  def edit?
    update?
  end

  def destroy?
    false
  end

  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      scope.all
    end
  end
end