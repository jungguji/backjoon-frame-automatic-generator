package com.junggu.backjoonframeautomaticgenerator.domain.frame.domain;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

class FrameTest {

    @BeforeEach
    void setUp() {
    }

    @Test
    void getForm() throws IOException {
        Frame frame = Frame.builder()
                .isTestCase(false)
                .isNQuantity(false)
                .isSpaceIncludeNumber(false)
                .isNumber(false)
                .build();

        System.out.println(frame.getForm());
    }


}