class Series
  attr_reader :string

  def initialize(string)
    @string = string
  end

  def slices(int)
    raise ArgumentError if int > string.length
    string.split('').each_cons(int).map(&:join)
  end
end