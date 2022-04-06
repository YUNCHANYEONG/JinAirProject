package com.project.jinair.service.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbQna;
import com.project.jinair.model.entity.board.TbQnaAnswer;
import com.project.jinair.model.enumclass.QnaStatus;
import com.project.jinair.model.enumclass.QnaType;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.QnaAnswerApiRequest;
import com.project.jinair.model.network.response.board.QnaAnswerApiResponse;
import com.project.jinair.repository.TbQnaAnswerRepository;
import com.project.jinair.repository.TbQnaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.crypto.spec.OAEPParameterSpec;
import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QnaAnswerApiLogicService implements CrudInterface<QnaAnswerApiRequest, QnaAnswerApiResponse> {

    private final TbQnaAnswerRepository tbQnaAnswerRepository;
    private final TbQnaRepository tbQnaRepository;

    @Override
    public Header<QnaAnswerApiResponse> create(Header<QnaAnswerApiRequest> request) {
        QnaAnswerApiRequest qnaAnswerApiRequest = request.getData();
        TbQnaAnswer tbQnaAnswer = TbQnaAnswer.builder()
                .qaType(qnaAnswerApiRequest.getQaType())
                .qaTitle(qnaAnswerApiRequest.getQaTitle())
                .qaContent(qnaAnswerApiRequest.getQaContent())
                .qaQnaindex(qnaAnswerApiRequest.getQaQnaindex())
                .build();
        TbQnaAnswer newTbQnaAnswer = tbQnaAnswerRepository.save(tbQnaAnswer);

        tbQnaRepository.findByQnaIndex(qnaAnswerApiRequest.getQaQnaindex())
                .map(tbQna -> {
                    tbQna.setQnaIsans(QnaStatus.Complete);
                    return tbQna;
                }).map(tbQna -> tbQnaRepository.save(tbQna));

        return response(newTbQnaAnswer);
    }

    @Override
    public Header<QnaAnswerApiResponse> read(Long id) {
        return tbQnaAnswerRepository.findByQaQnaindex(id)
                .map(tbQnaAnswer -> response(tbQnaAnswer))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    @Override
    public Header<QnaAnswerApiResponse> update(Header<QnaAnswerApiRequest> request) {
        return null;
    }

    @Override
    public Header<QnaAnswerApiResponse> delete(Long id) {
        return null;
    }


    public Header<QnaAnswerApiResponse> response(TbQnaAnswer tbQnaAnswer) {
        QnaAnswerApiResponse qnaAnswerApiResponse = QnaAnswerApiResponse.builder()
                .qaIndex(tbQnaAnswer.getQaIndex())
                .qaType(tbQnaAnswer.getQaType())
                .qaTitle(tbQnaAnswer.getQaTitle())
                .qaContent(tbQnaAnswer.getQaContent())
                .qaRegdate(tbQnaAnswer.getQaRegdate())
                .qaQnaindex(tbQnaAnswer.getQaQnaindex())
                .build();
        return Header.OK(qnaAnswerApiResponse);
    }

    public Header deleteOfQnA(List<QnaAnswerApiRequest> requests){
        for(int i = 0; i < requests.size(); i++){
            Optional<TbQnaAnswer> qnaAnswer = tbQnaAnswerRepository.findByQaQnaindex(requests.get(i).getQaQnaindex());
            return qnaAnswer.map( qna -> {
                tbQnaAnswerRepository.delete(qna);
                return Header.OK();
            }).orElseGet(() -> Header.ERROR("데이터 없음"));
        }
        return null;
    }
}
