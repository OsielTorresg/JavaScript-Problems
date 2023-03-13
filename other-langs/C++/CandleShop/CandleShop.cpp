#include <iostream>
#include "Candle.hpp"
using namespace std;

int main()
{
  double grandTotal = 0.0;
  int grandBurnTime = 0;
  int grandCostPerBurnTime = 0;
  int start;

  Candle candles[3] = {Candle("Luscious Lavender", 2.50, 5, 0), Candle("Fragrant Floral's", 3.75, 7, 0), Candle("Spicy N' Dicey", 5.99, 12, 0)};

  cout << "Enter 0 to continue\n";
  cin >> start;
  if (start != 0)
  {
    return 1;
  }

  for (int i = 0; i < 3; i++)
  {
    int input;
    cout << "\nHow many " << candles[i].getName() << " candles would you like? Enter a number amount.\n";
    cin >> input;
    candles[i].setAmount(input);

    grandTotal = candles[i].getTotalPrice();
    grandBurnTime = candles[i].getTotalBurnTime();
    grandCostPerBurnTime = candles[i].getTotalCostPerBurnTime();
  }

  cout << "\nReceipt\n";
  for (int i = 0; i < 3; i++)
  {
    cout << "\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n";
    cout << candles[i].getName() << "\n";
    cout << "Amount: " << candles[i].getAmount() << "\n";
    cout << "Burn time: " << candles[i].getBurnTime() << " hours" << "\n";
    cout << "Dollar per Burn Time: " << candles[i].getTotalCostPerBurnTime() << "\n";
    cout << "Price: " << candles[i].getTotalPrice() << "\n";
    cout << "\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n";
  }

  cout << "Total Burn Time: " << grandBurnTime << "\n";
  cout << "Total Cost per Burn Time: " << grandCostPerBurnTime << "\n";
  cout << "Total Price: " << grandTotal << "\n";

  return 0;
}