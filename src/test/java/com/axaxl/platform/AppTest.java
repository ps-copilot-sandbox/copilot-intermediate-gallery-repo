package com.axaxl.platform;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class AppTest {

    private final App app = new App();

    @Test
    void greetingReturnsExpectedMessage() {
        assertEquals("core-svc is running", app.greeting());
    }

    @Test
    void addReturnsSum() {
        assertEquals(5, app.add(2, 3));
    }
}
