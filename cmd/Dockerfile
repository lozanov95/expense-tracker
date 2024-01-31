FROM golang:1.21 as builder
WORKDIR /app
COPY go.mod .
RUN go mod download && go mod verify
COPY *.go .
RUN CGO_ENABLED=0 go build -v -o /app/expense-tracker ./...

FROM scratch
COPY --from=builder /app/expense-tracker /go/bin/expense-tracker
CMD ["/go/bin/expense-tracker"]