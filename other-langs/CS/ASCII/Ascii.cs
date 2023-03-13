using System;

class Ascii
{
  static void Main()
  {
    Console.CursorVisible = false;
    Console.ForegroundColor = ConsoleColor.Green;
    Console.BackgroundColor = ConsoleColor.Black;
    Console.Clear();
    int x = Console.WindowWidth / 2;
    int y = Console.WindowHeight / 2;
    int dx = 1;
    int dy = -1;
    while (true)
    {
      Console.SetCursorPosition(x, y);
      Console.Write("🤠");
      System.Threading.Thread.Sleep(50);
      Console.SetCursorPosition(x, y);
      Console.Write(" ");
      x += dx;
      y += dy;
      if (x <= 0 || x >= Console.WindowWidth - 1)
      {
        dx *= -1;
      }
      if (y <= 0 || y >= Console.WindowHeight - 1)
      {
        dy *= -1;
      }
    }
  }
}
