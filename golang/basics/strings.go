package main

import (
	"fmt"
	"sort"
	"strings"
)

func main() {
	str := "Hello World"
	fmt.Println(strings.Contains(str, "l"))
	fmt.Println(strings.Index(str, "lo"))
	fmt.Println(strings.Count(str, "l"))
	fmt.Println(strings.Replace(str, "l", "x", 3))
	fmt.Println(strings.Split(str, " ")[0])

	ls := []int{1, 2, 3, 4, 5, 4, 3, 2, 1}
	sort.Ints(ls)
	fmt.Println(ls)

	fmt.Println(strings.Join([]string{"1", "2"}, "XX"))
}
