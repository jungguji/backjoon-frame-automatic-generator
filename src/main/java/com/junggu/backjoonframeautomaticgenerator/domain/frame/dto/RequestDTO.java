package com.junggu.backjoonframeautomaticgenerator.domain.frame.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class RequestDTO {
    private boolean isTestCase;
    private boolean isNQuantity;
    private boolean isSpaceIncludeNumber;

    @Builder
    public RequestDTO(boolean isTestCase, boolean isNQuantity, boolean isSpaceIncludeNumber) {
        this.isTestCase = isTestCase;
        this.isNQuantity = isNQuantity;
        this.isSpaceIncludeNumber = isSpaceIncludeNumber;
    }
}
