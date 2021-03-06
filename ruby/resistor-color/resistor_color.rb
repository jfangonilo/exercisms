=begin
Write your code for the 'Resistor Color' exercise in this file. Make the tests in
`resistor_color_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/resistor-color` directory.
=end

class ResistorColor
  def self.color_code(color)
    NUMBERS[color]
  end

  NUMBERS = {
    "black"   => 0,
    "brown"   => 1,
    "red"     => 2,
    "orange"  => 3,
    "yellow"  => 4,
    "green"   => 5,
    "blue"    => 6,
    "violet"  => 7,
    "grey"    => 8,
    "white"   => 9
  }

  COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
end