package com.axaxl.platform;

public class App {

    public String greeting() {
        return "core-svc is running";
    }

    public int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(new App().greeting());
    }
}
