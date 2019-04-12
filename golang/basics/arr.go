package main

import "fmt"

func addem(numbers []float64) (float64, string) {
	var sum float64
	sum = 0
	for _, i := range numbers {
		sum += i
	}
	return sum, "SUM"
}

func subem(args ...int) int {
	final := 0
	for _, i := range args {
		final -= i
	}
	return final
}

func main() {
	listnums := []float64{3, 2, 3, 4, 5}
	fmt.Println(listnums)

	for _, i := range listnums {
		fmt.Println(i)
	}

	switch listnums[0] {
	case 1:
		fmt.Println("CASE 1")
		break
	default:
		fmt.Println("CASE DEFAULT")
		break
	}
	sum, str := addem(listnums)
	fmt.Println(str, sum)
	fmt.Println(subem(1, 2, 3, 4, 5))
}
