package com.project.jinair.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing
public class JpaConfig { // AuditorAware을 사용하기 위해 명목상 만든어준 설정파일

}
