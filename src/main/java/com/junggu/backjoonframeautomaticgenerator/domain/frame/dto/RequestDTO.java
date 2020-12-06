package com.junggu.backjoonframeautomaticgenerator.domain.frame.dto;

import lombok.Getter;

@Getter
public class RequestDTO {
    private final boolean isTestCase;
    private final boolean isNQuantity;
    private final boolean isSpaceIncludeNumber;
    private final boolean isNumber;

    public RequestDTO(boolean isTestCase, boolean isNQuantity, boolean isSpaceIncludeNumber, boolean isNumber) {
        this.isTestCase = isTestCase;
        this.isNQuantity = isNQuantity;
        this.isSpaceIncludeNumber = isSpaceIncludeNumber;
        this.isNumber = isNumber;
    }
}
