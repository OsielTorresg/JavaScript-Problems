import java.util.Scanner;

class Candle {
  private String name;
  private double price;
  private int burnTime;
  private int amount;
  private double totalPrice;
  private int totalBurnTime;
  private double costPerBurnTime;

  public Candle(String name, double price, int burnTime, int amount) {
    this.name = name;
    this.price = price;
    this.burnTime = burnTime;
    this.amount = amount;
  }

  // Getters

  public String getName() {
    return this.name;
  }

  public int getBurnTime() {
    return this.burnTime;
  }

  public int getAmount() {
    return this.amount;
  }

  public double getTotalPrice() {
    return this.totalPrice;
  }

  public double getTotalCostPerBurn() {
    return this.costPerBurnTime;
  }

  // Setters

  public void setAmount(int amount) {
    this.amount = amount;
  }

  // Logic

  public double totalPrice() {
    this.totalPrice = (double) this.amount * this.price;
    return this.totalPrice;
  }

  public int totalBurnTime() {
    this.totalBurnTime = this.amount * this.burnTime;
    return this.totalBurnTime;
  }

  public double costPerBurnTime() {
    this.costPerBurnTime = this.totalPrice() / this.burnTime;
    return costPerBurnTime;
  }

}

public class CandleShop {
  public static void main(String[] args) throws InterruptedException {
    double grandTotal = 0.0;
    int grandTotalBurnTime = 0;
    double grandCostPerBurnTime = 0.0;

    // Candle Objects
    Candle candleOne = new Candle("Luscious Lavender", 2.50, 5, 0);
    Candle candleTwo = new Candle("Fragrant Floral's", 3.75, 7, 0);
    Candle candleThree = new Candle("Spicy N' Dicey", 5.99, 12, 0);

    Candle[] candles = new Candle[] { candleOne, candleTwo, candleThree };

    Scanner keyboard = new Scanner(System.in);
    // other variables to help complete the algorithm to sell Candles
    System.out.println("Enter 0 to continue: ");
    keyboard.nextInt();

    for (int i = 0; i < candles.length; i++) {
      System.out.println(String.format(
          "How many of the %s candles would you like? Enter a number amount.", candles[i].getName()));
      candles[i].setAmount(keyboard.nextInt());

      candles[i].totalPrice();

      grandTotal += candles[i].totalPrice();
      grandTotalBurnTime += candles[i].totalBurnTime();
      grandCostPerBurnTime += candles[i].costPerBurnTime();
    }

    System.out.println("\n" + "Receipt");
    for (int i = 0; i < candles.length; i++) {
      System.out.println("\n"
          + "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
          + "\n");

      System.out.printf(
          candles[i].getName() + "\n" + "Amount: " + candles[i].getAmount() + "\n"
              + "Burn Time: " + candles[i].getBurnTime() + " hours" + "\n"
              + "Dollar per Burn Time: " + candles[i].getTotalCostPerBurn() + "\n" + "Price: $"
              + "%.2f",
          candles[i].getTotalPrice());
      System.out.println("\n"
          + "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
          + "\n");
    }

    System.out.printf("Total Burn Time: " + grandTotalBurnTime + "\n" + "Total Dollar per Burn Time: "
        + grandCostPerBurnTime + "\n" + "Total Price: " + "%.2f", grandTotal);
    System.out.println("\n");
    keyboard.close();
  }
}