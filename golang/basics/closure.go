package main

import "fmt"

func main() {
	num := 10

	doubleNum := func() int {
		num *= 2
		return num
	}
	fmt.Println(factorial(4))
	fmt.Println(doubleNum())
	fmt.Println(doubleNum())
}

func factorial(num int) int {

	if num == 1 || num == 0 {
		return 1
	}
	return num * factorial(num-1)

}
