package api

import (
	"context"
	"log"
)

type Server struct {
}

func (s *Server) SayHello(ctx context.Context, in *PingMessage) (*PingMessage, error) {
	log.Printf("Receive message: %s", in.Greeting)
	return &PingMessage{Greeting: "Hello world 1"}, nil
}
