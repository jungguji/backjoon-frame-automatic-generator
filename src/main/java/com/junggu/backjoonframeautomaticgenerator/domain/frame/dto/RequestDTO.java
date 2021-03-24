package com.junggu.backjoonframeautomaticgenerator.domain.frame.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class RequestDTO {
    private boolean testCase;
    private boolean multiCaseQuantity;
    private boolean spaceIncludeNumber;
    private boolean inputNumber;

    @Builder
    public RequestDTO(boolean testCase, boolean multiCaseQuantity, boolean spaceIncludeNumber, boolean inputNumber) {
        this.testCase = testCase;
        this.multiCaseQuantity = multiCaseQuantity;
        this.spaceIncludeNumber = spaceIncludeNumber;
        this.inputNumber = inputNumber;
    }

    public String toString() {
        return "testCase >> " + this.testCase + " nQ >> " + multiCaseQuantity + " space >> " + spaceIncludeNumber;
    }
}
