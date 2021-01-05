package com.junggu.backjoonframeautomaticgenerator.domain.frame.domain;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.IOException;

class FrameTest {

    @BeforeEach
    void setUp() {
    }

    @Test
    void getForm() {
        Frame frame = Frame.builder()
                .isTestCase(false)
                .isNQuantity(false)
                .isSpaceIncludeNumber(true)
                .build();

        System.out.println(frame.getForm());
    }


}