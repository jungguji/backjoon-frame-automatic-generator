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

    @Builder
    public RequestDTO(boolean testCase, boolean multiCaseQuantity, boolean spaceIncludeNumber) {
        this.testCase = testCase;
        this.multiCaseQuantity = multiCaseQuantity;
        this.spaceIncludeNumber = spaceIncludeNumber;
    }

    public String toString() {
        return "testCase >> " + this.testCase + " nQ >> " + multiCaseQuantity + " space >> " + spaceIncludeNumber;
    }
}
