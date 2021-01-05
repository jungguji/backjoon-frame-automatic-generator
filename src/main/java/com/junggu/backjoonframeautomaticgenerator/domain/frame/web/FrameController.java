package com.junggu.backjoonframeautomaticgenerator.domain.frame.web;

import com.junggu.backjoonframeautomaticgenerator.domain.frame.domain.Frame;
import com.junggu.backjoonframeautomaticgenerator.domain.frame.dto.RequestDTO;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FrameController {

    @PostMapping(path = "/frame", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getFrame(@RequestBody RequestDTO request) {
        Frame frame = Frame.builder()
                .testCase(request.isTestCase())
                .multiCaseQuantity(request.isMultiCaseQuantity())
                .spaceIncludeNumber(request.isSpaceIncludeNumber())
                .build();

        return frame.getForm();
    }
}
