package com.junggu.backjoonframeautomaticgenerator.domain.frame.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class RequestDTO {
    private Boolean isTestCase;
    private Boolean isNQuantity;
    private Boolean isSpaceIncludeNumber;

    @Builder
    public RequestDTO(Boolean isTestCase, Boolean isNQuantity, Boolean isSpaceIncludeNumber) {
        this.isTestCase = isTestCase;
        this.isNQuantity = isNQuantity;
        this.isSpaceIncludeNumber = isSpaceIncludeNumber;
    }

    public String toString() {
        return "tsetcase >> " + this.isTestCase + " nQ >> " + isNQuantity + " space >> " + isSpaceIncludeNumber;
    }
}
