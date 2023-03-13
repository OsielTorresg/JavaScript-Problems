#include "Candle.hpp"

// Constructor
Candle::Candle(string new_name, double new_price, int new_burnTime, int new_amount) : name(new_name), price(new_price), burnTime(new_burnTime), amount(new_amount){};

Candle::~Candle() {}

// Getters

string Candle::getName()
{
  return name;
}

double Candle::getPrice()
{
  return price;
}

int Candle::getBurnTime()
{
  return burnTime;
}

int Candle::getAmount()
{
  return amount;
}

double Candle::getTotalPrice()
{
  totalPrice = (double)amount * price;
  return totalPrice;
}

int Candle::getTotalBurnTime()
{
  totalBurnTime = amount * burnTime;
  return totalBurnTime;
}

double Candle::getTotalCostPerBurnTime()
{
  totalCostPerBurnTime = (double)getTotalPrice() / burnTime;
  return totalCostPerBurnTime;
}

// Setters

void Candle::setAmount(int new_amount)
{
  amount = new_amount;
}