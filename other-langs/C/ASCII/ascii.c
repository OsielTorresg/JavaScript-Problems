#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <time.h>

#define WIDTH 200
#define HEIGHT 100
#define STAR_DENSITY 50

int main() {
    int x, y, i;
    int starfield[WIDTH][HEIGHT];
    srand(time(NULL));
    for (y = 0; y < HEIGHT; y++) {
        for (x = 0; x < WIDTH; x++) {
            if (rand() % STAR_DENSITY == 0) {
                starfield[x][y] = 1;
            } else {
                starfield[x][y] = 0;
            }
        }
    }
    while (1) {
        system("clear");
        for (y = 0; y < HEIGHT; y++) {
            for (x = 0; x < WIDTH; x++) {
                if (starfield[x][y]) {
                    putchar('*');
                } else {
                    putchar(' ');
                }
            }
            putchar('\n');
        }
        for (i = 0; i < WIDTH; i++) {
            for (y = HEIGHT - 1; y > 0; y--) {
                starfield[i][y] = starfield[i][y-1];
            }
            if (rand() % STAR_DENSITY == 0) {
                starfield[i][0] = 1;
            } else {
                starfield[i][0] = 0;
            }
        }
        usleep(100500);
    }
    return 0;
}
