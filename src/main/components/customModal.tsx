import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { IconButton } from "react-native-paper";

interface ModalProps {
  isVisible: boolean;
  title: string;
  detail: string;
  noText: string;
  yesText: string;
  onClose: () => void;
  onPressNo: () => void;
  onPressYes: () => void;
}

export const CustomModal = (props: ModalProps) => {
  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={props.onClose}
      onBackButtonPress={props.onClose}
      backdropOpacity={0.85}
    >
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          paddingTop: 10,
        }}
      >
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: 5,
            paddingBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 0.8,
            borderColor: "#e5e5e5",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#000",
            }}
          >
            {props.title}
          </Text>

          <IconButton
            icon="close"
            size={20}
            onPress={props.onClose}
            style={{ backgroundColor: "#f2f2f2" }}
          />
        </View>

        {/* Detail */}
        <View
          style={{
            marginVertical: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontWeight: "600",
              fontSize: 15,
            }}
          >
            {props.detail}
          </Text>
        </View>

        <ScrollView keyboardShouldPersistTaps={"always"}>
          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              justifyContent: "space-around",
              borderTopWidth: 0.8,
              borderColor: "#e5e5e5",
            }}
          >
            {/* No Button */}
            <TouchableOpacity
              onPress={props.onPressNo}
              style={{
                paddingVertical: 15,
                flex: 1,
                alignItems: "center",
                borderRightWidth: 0.8,
                borderColor: "#e5e5e5",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#555",
                }}
              >
                {props.noText}
              </Text>
            </TouchableOpacity>

            {/* Yes Button */}
            <TouchableOpacity
              onPress={props.onPressYes}
              style={{
                paddingVertical: 15,
                flex: 1,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                {props.yesText}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};