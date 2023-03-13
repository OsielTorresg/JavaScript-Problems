#include <iostream>
using namespace std;

class Candle
{
private:
  string name;
  double price;
  int burnTime;
  int amount;
  double totalPrice;
  int totalBurnTime;
  double totalCostPerBurnTime;

public:
  Candle(string new_name, double new_price, int new_burnTime, int new_amount);
  ~Candle();

  // Getters
  string getName();
  double getPrice();
  int getBurnTime();
  int getAmount();
  // double getTotalPrice();
  // int getTotalBurnTime();
  // double getTotalCostPerBurnTime();

  // Setters
  void setAmount(int amount);
  double getTotalPrice();
  int getTotalBurnTime();
  double getTotalCostPerBurnTime();
};