package viewModel

type Data struct {
	Title string
}

func defineTitle() Data {
	return Data{Title: "Hello world"}
}
